let input = document.getElementById('input')
var title = document.getElementsByClassName('title')[0]
var spans = document.getElementsByTagName('span')

const calendarDiv = document.getElementById('calendar')
for(let i = 0; i < 42; i++){
    const spanEle = document.createElement('span')
    calendarDiv.appendChild(spanEle)
}

input.onblur = function() {
    let inputVal = input.value //获取输入框内容
    updateCal(analysisDate(inputVal))
}
document.onkeydown = function (e) { // 回车提交表单
    let inputVal = input.value //获取输入框内容
    let code = e.keyCode
    if (code == 13) {
        updateCal(analysisDate(inputVal))
    }
}

// 判断闰年
function judgeYear(year) {
    if (year % 4 == 0 && year % 100 !=0 || year % 400 ==0) {
        return true
    } else {
        return false
    }
}

//解析日期 返回由输入日期，当月开始于周几，当月的天数组成的数组
function analysisDate(inputVal) {

    let strYear = inputVal.slice(0, 4)
    let strMonth = inputVal.slice(4, 6)
    if (strMonth.indexOf('0') == 0) {
        strMonth = strMonth[1]
    } 
    let strDay = inputVal.slice(6, 8)
    
    let strDate = strMonth + ' ' + strDay + ',' + strYear
    // console.log(strDate)
    let date = new Date(strDate)

    //获取当月第一天日期
    let strDate1 = strMonth + ' ' + '1' + ',' + strYear
    let date1 = new Date(strDate1)
    // console.log(date1.getDay())

    // 获取当月对应的天数
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let month = date.getMonth()
    let year = date.getFullYear()
    let correspondingDays = 0
    if (month == 2){
        correspondingDays = judgeYear(year)? 29:28
    } else {
        correspondingDays = months[month]
    }
    return ([inputVal, date1.getDay(), correspondingDays])
}

// 根据解析日期的结果来填充日历
function updateCal(info){
    // 填充title
    
    title.innerText = info[0]
    // 先将填写日期的spans置为空
    for (let i = 7; i < 49; i++) {
        spans[i].innerText = ''
        spans[i].style.backgroundColor=''
    }
    // 填充起始位置
    let startInd = 7 + info[1]
    for (let i = startInd, j = 1; j <= info[2]; i++, j++) {
        spans[i].innerText = j

        // 高亮显示
        if (parseInt(title.innerText.slice(6, 8)) == j) {
            spans[i].style.backgroundColor="red"
        }

        // 弹窗显示
        spans[i].onclick = function(){ 
            alert(title.innerText.slice(0,6) + spans[i].innerText)
        }
    }
}

// 处理上一年下一年上一月下一月
let lastYear = document.getElementById('lastYear')
let lastMonth = document.getElementById('lastMonth')
let nextYear = document.getElementById('nextYear')
let nextMonth = document.getElementById('nextMonth')

lastYear.onclick = function() {
    if(title.innerText != ''){
        title.innerText = String(parseInt(title.innerText.slice(0, 4)) - 1)
                        + title.innerText.slice(4, 8)
        updateCal(analysisDate(title.innerText))
    } 
}

nextYear.onclick = function() {
    if(title.innerText != ''){
        title.innerText = String(parseInt(title.innerText.slice(0, 4)) + 1)
                        + title.innerText.slice(4, 8)
        updateCal(analysisDate(title.innerText))
    }
}

lastMonth.onclick = function() {
    if(title.innerText != ''){  
        updateCal(analysisDate(monthSub(title.innerText)))
    }
}

nextMonth.onclick = function() {
    if(title.innerText != ''){
        updateCal(analysisDate(monthAdd(title.innerText)))      
    }
}

// 月份减函数
function monthSub(data) {
    // 如果是1月另外判断
    if (data.slice(4, 6) == '01'){
        data = String(parseInt(data.slice(0, 4)) - 1)
                        + '12'   
                        + data.slice(6, 8)
    }
    // 2-9月
    else if (data.slice(4, 5) == '0') {
        data = data.slice(0, 4) 
             + '0' 
             + String(parseInt(data.slice(5, 6)) - 1) 
             + data.slice(6, 8)
    }
    // 10月
    else if (data.slice(4, 6) == '10') {
        data = data.slice(0, 4)
             + '09'
             + data.slice(6, 8)
    }
    // 11,12月
    else {
        data = data.slice(0, 4) 
             + String(parseInt(data.slice(4, 6)) - 1)
             + data.slice(6, 8)
    }
    return data
}

//月份加函数
function monthAdd(data) {
        // 如果是12月另外判断
        if (data.slice(4, 6) == '12'){
            data = String(parseInt(data.slice(0, 4)) + 1)
                            + '01'   
                            + data.slice(6, 8)
        }
        // 1-8月
        else if (data.slice(4, 5) == '0' && data.slice(5, 6) != '9') {
            data = data.slice(0, 4) 
                 + '0' 
                 + String(parseInt(data.slice(5, 6)) + 1) 
                 + data.slice(6, 8)
        }
        // 9月
        else if (data.slice(5, 6) == '9') {
            data = data.slice(0, 4)
                 + '10'
                 + data.slice(6, 8)
        }
        // 10,11月
        else {
            data = data.slice(0, 4) 
                 + String(parseInt(data.slice(4, 6)) + 1)
                 + data.slice(6, 8)
        }
        return data
}








