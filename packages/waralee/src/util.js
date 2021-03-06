function CreateCrotchPoints(part) {
  let { options, measurements, points } = part.shorthand()

  let seatDepth = measurements.seatDepth + measurements.seatDepth * options.waistRaise
  let circumference = measurements.seatCircumference
  let circumference4 = circumference / 4

  points.mHip = points.mWaist.shift(270, seatDepth)

  points.fWaistSide = points.mWaist
    .shift(180, options.crotchFront * circumference4)
    .shift(90, options.waistBand)
  points.fWaistCrotchCP = points.fWaistSide.shift(
    270,
    seatDepth * options.crotchFactorFrontVer + options.waistBand
  )
  points.fHipCrotchCP = points.mHip.shift(
    180,
    options.crotchFront * circumference4 * options.crotchFactorFrontHor
  )

  points.fHipSide = points.mHip.shift(180, options.crotchFront * circumference4)

  points.bWaistSide = points.mWaist
    .shift(0, options.crotchBack * circumference4)
    .shift(90, options.waistBand)
    .shift(90, options.backRaise * seatDepth)
  points.bWaistCrotchCP = points.bWaistSide.shift(270, seatDepth * options.crotchFactorBackVer)
  points.bHipCrotchCP = points.mHip.shift(
    0,
    options.crotchBack * circumference4 * options.crotchFactorBackHor
  )

  points.bHipSide = points.mHip.shift(0, options.crotchBack * circumference4)
}

export { CreateCrotchPoints }
