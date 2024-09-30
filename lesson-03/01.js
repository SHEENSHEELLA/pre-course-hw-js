const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    // return colors ФИЛЬТРУЕМ.ПРЕВРАЩАЕМ В СТРОКУ('-')
    return colors.filter(e => e === "черный" || e === "красный" || e === "желтый").join('-')
}

console.log(createColorString());