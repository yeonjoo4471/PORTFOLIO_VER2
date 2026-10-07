import { useEffect, useRef, useState } from 'react'
import bgmSound from '../assets/audio/end-of-summer.mp3'

export default function AudioController() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.35
    audio.loop = true

    // Attempt autoplay if allowed
    try {
      const playPromise = audio.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    } catch {
      // Autoplay blocked by browser policy
    }
  }, [])

  // Auto-start on first user interaction if not playing yet
  useEffect(() => {
    if (hasInteracted || isPlaying) return

    const handleFirstInteraction = () => {
      setHasInteracted(true)
      const audio = audioRef.current
      if (audio && audio.paused) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {})
      }
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }

    window.addEventListener('click', handleFirstInteraction, { once: true })
    window.addEventListener('keydown', handleFirstInteraction, { once: true })

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }
  }, [hasInteracted, isPlaying])

  const toggleSound = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        const p = audio.play()
        if (p && typeof p.catch === 'function') {
          p.then(() => setIsPlaying(true)).catch(() => {})
        } else {
          setIsPlaying(true)
        }
      } catch {
        // Playback prevented
      }
    }
  }

  return (
    <div className="audio-controller-wrapper">
      <audio ref={audioRef} src={bgmSound} preload="auto" />
      <button
        type="button"
        className={`audio-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleSound}
        aria-label={isPlaying ? 'BGM 끄기 (SOUND OFF)' : 'BGM 켜기 (SOUND ON)'}
        title={isPlaying ? 'SOUND OFF' : 'SOUND ON'}
      >
        <span className="audio-bars" aria-hidden="true">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </span>
        <span className="audio-label">{isPlaying ? 'SOUND ON' : 'SOUND OFF'}</span>
      </button>
    </div>
  )
}
