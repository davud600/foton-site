'use client'

import { useState } from 'react'
import ReactCompareImage from 'react-compare-image'

type ImageVariation = 'default' | 'false' | 'mi' | 'ndvi'

const images = ['mirusha', 'radoniq']

const ImageTitles: Record<string, string> = {
  mirusha: 'Mirusha Waterfalls',
  radoniq: 'Liqeni i Radoniqit',
}

export function ImageComparing() {
  const [imageIndex, setImageIndex] = useState(0)
  const [leftVariation, setLeftVariation] = useState<ImageVariation>('default')
  const [rightVariation, setRightVariation] = useState<ImageVariation>('false')

  const imageOptions = [
    { value: 'default', label: 'Default' },
    { value: 'false', label: 'False Color' },
    { value: 'mi', label: 'MI' },
    { value: 'ndvi', label: 'NDVI' },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex justify-between w-full gap-4 my-4 items-center">
        <div className="mb-4">
          <label
            htmlFor="leftVariation"
            className="block text-light-secondary mb-2"
          >
            Left Image:
          </label>
          <select
            id="leftVariation"
            value={leftVariation}
            onChange={(e) => setLeftVariation(e.target.value as ImageVariation)}
            className="p-2 bg-dark-background text-light-secondary border border-light-secondary rounded-md"
          >
            {imageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-lg md:text-xl text-light-secondary">
            {ImageTitles[images[imageIndex]]}
          </h3>
          <div className="flex gap-4 justify-between items-center">
            <button
              className="flex justify-center items-center w-12 h-8 bg-dark-background text-light-secondary border border-light-secondary rounded-md hover:bg-light-secondary hover:text-dark-background transition duration-300"
              aria-label="left arrow"
              onClick={() => {
                setImageIndex((prevImageIndex) => {
                  return prevImageIndex <= 0
                    ? images.length - 1
                    : prevImageIndex - 1
                })
              }}
            >
              <span>&lt;</span>
            </button>
            <button
              className="flex justify-center items-center w-12 h-8 bg-dark-background text-light-secondary border border-light-secondary rounded-md hover:bg-light-secondary hover:text-dark-background transition duration-300"
              aria-label="right arrow"
              onClick={() => {
                setImageIndex((prevImageIndex) => {
                  return prevImageIndex >= images.length - 1
                    ? 0
                    : prevImageIndex + 1
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
            className="block text-light-secondary mb-2"
          >
            Right Image:
          </label>
          <select
            id="rightVariation"
            value={rightVariation}
            onChange={(e) =>
              setRightVariation(e.target.value as ImageVariation)
            }
            className="p-2 bg-dark-background text-light-secondary border border-light-secondary rounded-md"
          >
            {imageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-[95vw] md:w-[70vw] h-auto">
        <ReactCompareImage
          leftImage={`${images[imageIndex]}-${leftVariation}.jpg`}
          rightImage={`${images[imageIndex]}-${rightVariation}.jpg`}
        />
      </div>
    </div>
  )
}
