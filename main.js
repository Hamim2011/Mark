function mark(number){


    if (number >= 80 && number <= 100)
    return "A+"

    else if (number >= 75 && number <= 79)
    return "A"

    else if (number >= 70 && number <= 74)
    return "A-"

    else if (number >= 65 && number <= 69)
    return "B+"

    else if (number >= 60 && number <= 64)
    return "B"

    else if (number >= 55 && number <= 59)
    return "B-"

    else if (number >= 50 && number <= 54)
    return "C+"

    else if (number >= 45 && number <= 49)
    return "C"

    else if (number >= 40 && number <= 44)
    return "D"

    else if (number >= 0 && number <= 39)
    return "F"
}

grade = 100

document.write(("You got ") + mark(grade))
