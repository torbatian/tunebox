'use strict'

const Path = require('path')
const Joi = require('joi')

const tunebox = {
  config: null
}

tunebox.init = (options) => {
  const optionsSchema = Joi.object().keys({
    baseDir: Joi.string().required(),
    config: Joi.object().keys({
      default: Joi.string().required()
    }).unknown().required()
  }).required()

  try {
    options = Joi.attempt(options, optionsSchema)
  } catch (error) {
    throw new Error('tunebox found error in init options.')
  }

  let environment = process.env.NODE_ENV || 'default'

  if (!options.config[environment]) {
    throw new Error('tunebox cannot find proper config setting with your NODE_ENV')
  }

  const configFilePath = Path.join(options.baseDir, options.config[environment])

  tunebox.config = require(configFilePath)
}

module.exports = tunebox
