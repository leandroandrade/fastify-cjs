class SampleRepository {
    getDateRepository(year, month, date) {
        return new Date(year, month, date);
    }
}

module.exports = {
    SampleRepository,
};
