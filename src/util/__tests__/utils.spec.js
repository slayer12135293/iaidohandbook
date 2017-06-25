import dateUtil from '../date'

describe('arePeriodsInInterval()', () => {
    it('returns true for periods in interval', () => {
        // Arrange
        const periods = [
            {
                period: '2017-01',
            },
            {
                period: '2017-02',
            },
            {
                period: '2017-03',
            },
        ]

        const periodFrom = '2017-01'
        const periodTo = '2017-03'

        // Act
        const isInInterval = dateUtil.arePeriodsInInterval(periods, periodFrom, periodTo)

        // Assert
        expect(isInInterval).toBe(true)
    })

    it('returns false for periods varies from interval', () => {
        // Arrange
        const periods = [
            {
                period: '2017-01',
            },
            {
                period: '2017-02',
            },
            {
                period: '2017-03',
            },
        ]

        const periodFrom = '2017-01'
        const periodTo = '2017-04'

        // Act
        const isInInterval = dateUtil.arePeriodsInInterval(periods, periodFrom, periodTo)

        // Assert
        expect(isInInterval).toBe(false)
    })
})
