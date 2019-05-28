import express from 'express'
import config from '../config'
import { getHistoVec, getOTC } from './report'
import { sendFeedback, sendContact } from './feedback'
// import { streamedReport } from './report'

const router = express.Router()

router.get('/version', (req, res) => res.send({ version: config.version }))
router.get('/health', (req, res) => res.send({ status: 'ok' }))
router.post('/id', getHistoVec)
router.post('/otc', getOTC)
// router.get('/stream', streamedReport)
router.post('/feedback', sendFeedback)
router.post('/contact', sendContact)

export default router
