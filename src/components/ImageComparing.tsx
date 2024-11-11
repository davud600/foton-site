'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import ReactCompareImage from 'react-compare-image'
import { Icons } from './Icons'

type ImageVariation = 'default' | 'false' | 'mi' | 'ndvi'

const images = ['mirusha', 'radoniqi', 'bjeshket', 'drini']

const ImageTitles = {
  mirusha: {
    en: 'Mirusha Waterfalls',
    sq: 'Ujëvarat e Mirushës',
  },
  radoniqi: {
    en: 'Radoniq Lake',
    sq: 'Liqeni i Radoniqit',
  },
  bjeshket: {
    en: 'Bjeshkët e Nemuna',
    sq: 'Bjeshkët e Nemuna',
  },
  drini: {
    en: 'Drin River',
    sq: 'Lumi Drin',
  },
}

export function ImageComparing() {
  const t = useTranslations('Home')
  const locale = useLocale()
  const [imageIndex, setImageIndex] = useState(0)
  const [leftVariation, setLeftVariation] = useState<ImageVariation>('default')
  const [rightVariation, setRightVariation] = useState<ImageVariation>('false')
  const [isLeftImageLoaded, setIsLeftImageLoaded] = useState(false)
  const [isRightImageLoaded, setIsRightImageLoaded] = useState(false)

  const imageOptions = [
    { value: 'default', label: 'Default' },
    { value: 'false', label: 'False Color' },
    { value: 'mi', label: 'MI' },
    { value: 'ndvi', label: 'NDVI' },
  ]

  const handleImageChange = () => {
    setIsLeftImageLoaded(false)
    setIsRightImageLoaded(false)
    setTimeout(() => {
      const newLeftImage = new Image()
      newLeftImage.src = `${images[imageIndex]}-${leftVariation}.jpg`
      newLeftImage.onload = () => setIsLeftImageLoaded(true)

      const newRightImage = new Image()
      newRightImage.src = `${images[imageIndex]}-${rightVariation}.jpg`
      newRightImage.onload = () => setIsRightImageLoaded(true)
    }, 500)
  }

  useEffect(() => {
    handleImageChange()
  }, [imageIndex, leftVariation, rightVariation])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex justify-between w-full gap-4 my-4 items-center">
        <div className="mb-4">
          <label
            htmlFor="leftVariation"
            className="block text-light-primary mb-2"
          >
            {t('left')}:
          </label>
          <select
            id="leftVariation"
            value={leftVariation}
            onChange={(e) => {
              setLeftVariation(e.target.value as ImageVariation)
            }}
            className="p-2 bg-dark-background text-light-primary border border-light-primary rounded-md"
          >
            {imageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-lg md:text-xl text-light-primary text-center italic">
            {(ImageTitles as any)[images[imageIndex]][locale]}
          </h3>
          <div className="flex gap-4 justify-between items-center">
            <button
              className="flex justify-center items-center w-10 h-10 bg-dark-background text-light-primary rounded-full hover:bg-light-primary hover:text-dark-background transition duration-300"
              aria-label="left arrow"
              onClick={() => {
                setImageIndex((prevImageIndex) => {
                  const newIndex =
                    prevImageIndex <= 0 ? images.length - 1 : prevImageIndex - 1
                  handleImageChange()
                  return newIndex
                })
              }}
            >
              <span>&lt;</span>
            </button>
            <button
              className="flex justify-center items-center w-10 h-10 bg-dark-background text-light-primary rounded-full hover:bg-light-primary hover:text-dark-background transition duration-300"
              aria-label="right arrow"
              onClick={() => {
                setImageIndex((prevImageIndex) => {
                  const newIndex =
                    prevImageIndex >= images.length - 1 ? 0 : prevImageIndex + 1
                  handleImageChange()
                  return newIndex
                })
              }}
            >
              <span>&gt;</span>
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="rightVariation"
            className="block text-light-primary mb-2"
          >
            {t('right')}:
          </label>
          <select
            id="rightVariation"
            value={rightVariation}
            onChange={(e) => {
              setRightVariation(e.target.value as ImageVariation)
            }}
            className="p-2 bg-dark-background text-light-primary border border-light-primary rounded-md"
          >
            {imageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-[95vw] md:w-[70vw] h-[51.08vw] md:h-[37.63vw] relative">
        {!isLeftImageLoaded || !isRightImageLoaded ? (
          <div className="w-full h-full flex justify-center items-center">
            <Icons.spinner className="h-10 w-10 animate-spin" />
          </div>
        ) : (
          <ReactCompareImage
            leftImage={`${images[imageIndex]}-${leftVariation}.jpg`}
            rightImage={`${images[imageIndex]}-${rightVariation}.jpg`}
          />
        )}
      </div>
    </div>
  )
}
