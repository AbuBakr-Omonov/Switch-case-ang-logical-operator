{
    //1-masala
    let day = 3;
    switch (day) {
        case 1:
            console.log("Dushanba");
            break;
        case 2:
            console.log("Seshanba");
            break;
        case 3:
            console.log("Chorshanba");
            break;

        case 4:
            console.log("Payshanba");
            break;

        case 5:
            console.log("Juma");
            break;
        case 6:
            console.log("Shanba");
            break;

        case 7:
            console.log("Yakshanba");
            break;
        default:
            console.log("Bunday kun mavjud emas");
    }
}

{
    //2-masala
    let k = 6;
    switch (k) {
        case 1:
            console.log("Yomon");
            break;
        case 2:
            console.log("Qonaqarsiz");
            break;
        case 3:
            console.log("Qonaqarli");
            break;

        case 4:
            console.log("Yaxshi");
            break;

        case 5:
            console.log("A'lo");
            break;

        default:
            console.log("xato");
    }
}

{
    //3-masala
    let oy = 44;

    switch (oy) {
        case 12:
        case 1:
        case 2:
            console.log(oy + "-oy Qish");
            break;
        case 3:
        case 4:
        case 5:
            console.log(oy + "-oy Bahor");
            break;
        case 6:
        case 7:
        case 8:
            console.log(oy + "-oy Yoz");
            break;
        case 12:
        case 9:
        case 10:
        case 11:
            console.log(oy + "-oy Kuz");
            break;
        default:
            console.log("Bunday oy yo'q");
    }
}

{
    //4-masala
    let oy = 9;
    switch (oy) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(oy + "-oy 31 kun");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
        case 8:
        case 10:
        case 12:
            console.log(oy + "-oy 30 kun");
            break;
        case 2:
            console.log(oy + "-oy 28 kun");
            break;
        default:
            console.log("Xato");
    }
}

{
    //5-masala
    let a = 10
    let b = 4
    let amal = 4

    switch (amal) {
        case 1:
            console.log(amal + " :", a + b);
            break
        case 2:
            console.log(amal + " :", a - b);
            break
        case 3:
            console.log(amal + " :", a / b);
            break
        case 4:
            console.log(amal + " :", a * b);
            break
        default:
            console.log("Bunday amal yo'q");
    }



}

{
    //6-masala
    let birlik = 5;
    let uzunlik = 100;
    switch (birlik) {
        case 1:
            console.log(uzunlik + "dm = " + 0.1 * uzunlik + "m");
            break;
        case 2:
            console.log(uzunlik + "km = " + 1000 * uzunlik + "m");
            break;

        case 3:
            console.log(uzunlik + "m = " + 1 * uzunlik + "m");
            break;

        case 4:
            console.log(uzunlik + "mm = " + 0.001 * uzunlik + "m");
            break;

        case 5:
            console.log(uzunlik + "sm = " + 0.01 * uzunlik + "m");
            break;
    }



}

{
    //7-masala
    let birlik = 2;
    let ogirlik = 1;
    switch (birlik) {
        case 1:
            console.log(ogirlik + "kg = " + 1 * ogirlik + "kg");
            break;
        case 2:
            console.log(ogirlik + "mg = " + 10 ** -6 * ogirlik + "kg");
            break;

        case 3:
            console.log(ogirlik + "g = " + 10 ** -3 * ogirlik + "kg");
            break;

        case 4:
            console.log(ogirlik + "t = " + 1000 * ogirlik + "kg");
            break;

        case 5:
            console.log(ogirlik + "s = " + 100 * ogirlik + "kg");
            break;
    }
}

{
    //8-masala
    let D = 31;
    let M = 5;

    let kunlarOy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (M < 1 || M > 12) {
        console.log("Noto'g'ri oy kiritildi!");
    } else {
        let maxKun = kunlarOy[M - 1];
        if (D < 1 || D > maxKun) {
            console.log("Noto'g'ri kun kiritildi!");
        } else {
            console.log("Berilgan sana to'g'ri:", D + "-" + M);
        }
    }
}
{
    //9-masala
    let D = 28; 
    let M = 2; 
    let kunlarOy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (D < kunlarOy[M - 1]) {
        D += 1;
    } else {
        D = 1;
        if (M < 12) {
            M += 1;
        }else {
            M = 1;
        }
    }
    console.log("Keyingi sana: " + D + " - " + M);
}
{
    //10-masala

    let y = "q";
    let k = 0;

    let ufq = "";
    let yonalish = "";

    switch (y) {
        case "s":
            ufq = "Shimol";
            break;
        case "j":
            ufq = "Janub";
            break;
        case "q":
            ufq = "Sharq";
            break;
        case "g":
            ufq = "G'arb";
            break;
    }

    switch (k) {
        case 0:
            yonalish = "Harakatni davom ettir";
            break;
        case 1:
            yonalish = "Chapga buril";
            break;
    }

    console.log(ufq + " bo'ylab " + yonalish);
}


//logical operatorlar

{
    //1-masala
    let login = "admin";
    let parol = "12345";

    if (login === "admin" && parol === "12345") {
        console.log("Xush kelibsiz, admin");
    } else {
        console.log("Login yoki parol noto'g'ri");
    }

}

{
    //2-masala
    let a = 5
    let b = 7
    let c = 6
    if (a >= b && a >= c) {
        console.log(a)
    } else if (b >= a && b >= c) {
        console.log(b)
    } else if (c >= a && c >= b) {
        console.log(c)
    } else {
        console.log("a=b=c");
    }
}

{
    //3-masala
    let isRegistered = false;

    if (isRegistered) {
        console.log("Siz tizimga kirdingiz");
    } else {
        console.log("Iltimos, ro'yxatdan o'ting");
    }
}

{
    //4-masala
    let width = 5
    let height = 4
    if (width == height) {
        console.log("Bu kvadrat");

    } else {
        console.log("Bu to'rt burchak")
    }
}

{
    //5-masala
    let a = -5
    let b = 5
    if ((a + b) > 0) {
        console.log("yig'indisi musbat");
    } else if ((a + b) === 0) {
        console.log("Yigindi manfiy yoki nol");
    } else {
        console.log("Yig‘indi manfiy");
    }
}

{
    //6-masala
    let harorat = 15;
    if (harorat > 30) {
        console.log("Juda issiq, soyada dam oling!");
    } else if (harorat >= 20 && harorat <= 30) {
        console.log("Ob-havo yaxshi, sayr qiling");
    } else if (harorat >= 10 && harorat < 20) {
        console.log("Salqin, issiq kiying");
    } else {
        console.log("Juda sovuq, uyda qoling");
    }
}


