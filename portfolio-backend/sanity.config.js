import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'v59lstdq',
  dataset: 'portfolio-v2',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
