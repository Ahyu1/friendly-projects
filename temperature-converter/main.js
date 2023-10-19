
let convertBtn = document.getElementById('convert')
    let res1 = document.getElementById('result1')
    let res2 = document.getElementById('result2')

    isFloat = true

    function cTok() {
        let userInput1 = parseInt(document.getElementById('in1').value)
        let ckFormula = userInput1 + 273.15
        res1.innerHTML = parseFloat(ckFormula).toFixed(2)
    }

    function kToc() {
        let userInput2 = parseInt(document.getElementById('in2').value)
        let kcFormula =  userInput2 - 273.15
        res2.innerHTML = parseFloat(kcFormula).toFixed(2)
    }

    
    let res3 = document.getElementById('result3')
    let res4 = document.getElementById('result4')

    function cTof() {
        let userInput3 = parseInt(document.getElementById('in3').value)
        let cfFormula = userInput3 * 9 / 5 + 32
        res3.innerHTML = parseFloat(cfFormula).toFixed(2)
    }

    function fToc() {
        let userInput4 = parseInt(document.getElementById('in4').value)
        let fcFormula = ((userInput4 - 32) * 5) / 9
        res4.innerHTML = parseFloat(fcFormula).toFixed(2)
    }
    
    let res5 = document.getElementById('result5')
    let res6 = document.getElementById('result6')

    function kTof() {
        let userInput5 = parseInt(document.getElementById('in5').value)
        let kfFormula= ((userInput5 - 273.15) * 9) / 5 + 32
        res5.innerHTML = parseFloat(kfFormula).toFixed(2)
    }

    function fTok() {
        let userInput6 = parseInt(document.getElementById('in6').value)
        let fkFormula = ((userInput6 - 32) * 5) / 9 + 273.15
        res6.innerHTML = parseFloat(fkFormula).toFixed(2)
    }
