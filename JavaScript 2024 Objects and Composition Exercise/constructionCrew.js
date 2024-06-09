function constructionCrew(input) {

    if (!input.dizziness) {
        return input;
    }

    input.levelOfHydrated += input.weight * input.experience * 0.1;
    input.dizziness = false;
    return input;


}

let res = constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
);
console.log(res);
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);