var HealthData = {
    _id: string,
    _openid: string,
    date: Date,
    username: string,
    gender: int,
    age: int,
    height: int,
    weight: int,
    waist: int,
    sbp: int,
    dbp: int,
    glu: int,
    chol: int,
    tg: int,
    hdl: int,
    history: int,
    familyhistory: int,
}

var HealthResult = {
    date: Date,
    prediction: [string],
    rist: [string],
    bmi: int,
    fat_rate: int
}