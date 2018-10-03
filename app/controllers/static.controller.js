const static = require('../assets/staticContent')

exports.deals = function(req, res) {
  const dealLists = static.dealLists
  res.status(200).json({ status: true, message: dealLists })
}

exports.profits = function(req, res) {
  const profitLists = static.profitLists
  res.status(200).json({ status: true, message: profitLists })
}

exports.contents = function(req, res) {
  const contents = static.contents
  res.status(200).json({ status: true, message: contents })
}

exports.destinations = function(req, res) {
  const destinations = static.destinations
  res.status(200).json({ status: true, message: destinations })
}

exports.btsLocation = function(req, res) {
  const locationSet = {
    center: { lat: 13.72906, lng: 100.53616 },
    markerColor: {
      ...BRT_COLOR
    },
    marker: {
      ...BRT
    }
  }
  res.status(200).json({ status: true, message: locationSet })
}

const BRT_COLOR = { brt: '#6ACD39' }
const BRT = {
  brt: [
    {
      lat: 13.721489759850527,
      lng: 100.53037458520134,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT1-สาธร'
    },
    {
      lat: 13.717167,
      lng: 100.5328,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT2-อาคารสงเคราะห์'
    },
    {
      lat: 13.712435,
      lng: 100.535118,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT3-เทคนิคกรุงเทพ'
    },
    {
      lat: 13.704662,
      lng: 100.538847,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT4-ถนนจันทน์'
    },
    {
      lat: 13.696256,
      lng: 100.545199,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT5-นราราม3'
    },
    {
      lat: 13.674125,
      lng: 100.543258,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT6-วัดด่าน'
    },
    {
      lat: 13.674771,
      lng: 100.534288,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT7-วัดปริวาส'
    },
    {
      lat: 13.682225,
      lng: 100.525383,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT8-วัดดอกไม้'
    },
    {
      lat: 13.688094,
      lng: 100.515427,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT9-สะพานพระราม9'
    },
    {
      lat: 13.690158,
      lng: 100.504226,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT10-เจริญราษฎร์'
    },
    {
      lat: 13.693837,
      lng: 100.499999,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT11-สะพานพระราม3'
    },
    {
      lat: 13.715591,
      lng: 100.478327,
      bg: '#6ACD39',
      line: 'STATION-BRT',
      name: 'BRT12-ราชพฤกษ์'
    }
  ]
}
