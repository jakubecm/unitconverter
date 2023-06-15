/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")

const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    let inputVal = inputEl.value

    if(isNaN(inputVal)){
        inputVal = 0
    }

    let calculated = convertUnits(inputVal)
    
    length.textContent = `${inputVal} meters = ${calculated.len.meterTofeet} feet | ${inputVal} feet = ${calculated.len.feetTometer} meters`
    volume.textContent = `${inputVal} liters = ${calculated.vol.literTogallon} gallons | ${inputVal} gallons = ${calculated.vol.gallonToliter} liters`
    mass.textContent = `${inputVal} kg = ${calculated.mass.kgTopound} pounds | ${inputVal} pounds = ${calculated.mass.poundTokg} kg`
})

function convertUnits(value){
    return {
        len: {
            meterTofeet: (value * 3.281).toFixed(3),
            feetTometer: (value / 3.281).toFixed(3)
        },
        vol: {
            literTogallon: (value * 0.264).toFixed(3),
            gallonToliter: (value / 0.264).toFixed(3)
        },
        mass: {
            kgTopound: (value * 2.204).toFixed(3),
            poundTokg: (value / 2.204).toFixed(3)
        }
    }
}