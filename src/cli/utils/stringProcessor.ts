/* eslint-disable no-plusplus */

import * as replace from 'replace-string'

const REGEX = /\{\{(.*?)\}\}/g

/**
 * @name stringProcessor
 *
 * @description The function detects `{{email}}` and swaps it with CSV Data.
 *
 * @param {string} html
 * @param {object} data
 *
 * @returns string
 */
export default function stringProcessor(html: string, data): string {
  let finalOutput = html
  const toReplace = []
  const swapOutWith = []

  const regexArray = html.match(REGEX)

  if (regexArray !== null) {
    for (let i = 0; i < regexArray.length; i++) {
      const string = regexArray[i]

      if (string.includes('|')) {
        let newString = string.substring(2, string.length - 2)

        const splitArray = newString.split('|')

        newString = splitArray[Math.floor(Math.random() * splitArray.length)]

        swapOutWith.push(newString)
      } else {
        swapOutWith.push(string.substring(2, string.length - 2))
      }

      toReplace.push(`{{${string.substring(2, string.length - 2)}}}`)
    }
  }

  for (let i = 0; i < toReplace.length; i++) {
    const toFinallySwapOutWith = data[swapOutWith[i]]
      ? data[swapOutWith[i]]
      : swapOutWith[i]
    finalOutput = replace(finalOutput, toReplace[i], toFinallySwapOutWith)
  }

  return finalOutput
}
