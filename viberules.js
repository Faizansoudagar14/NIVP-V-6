
function mainFunction() {
    document.getElementById("mainOutput").textContent = '';
    var [rebateType, threshold] = getValues();
    if (rebateType == '#' || threshold == '#') {
        swal({
            title: "Please Select Rebate type and Threshold.",
            text: "",
            icon: "warning",
            button: "OK",
        });
        return;
    }
    for (var i = 0; i < threshold; i++) {
        var_J(rebateType);
    }
    document.getElementById('getRules').disabled = false;
}

function getRules() {
    var [rebateType, threshold] = getValues();
    var str = '';
    var arr = document.querySelectorAll('#inputValues');
    if (rebateType == '#' || threshold == '#') {
        swal({
            title: "Please Select Rebate type and Threshold.",
            text: "",
            icon: "warning",
            button: "OK",
        });
        return;
    }
    for (var i = 0; i < threshold * 2; i++) {
        if (!document.querySelectorAll('#inputValues')[i].value) {
            swal({
                title: "Please Provide all Values.",
                text: "",
                icon: "warning",
                button: "OK",
            });
            return;
        }
    }
    if (rebateType == 'bx$gy$') {
        var k = 0;
        str = 'Here X: ' + arr[0].value + " & Y: " + arr[1].value + ',\n';
        str = str + 'Price in between 0.01 to ' + (arr[0].value - 0.01) + ' Rebate equal to ' + ((arr[1].value / arr[0].value) * 100).toFixed(2) + '%,\n';
        for (var j = 1; j < threshold; j++) {
            str = str + 'Price in between ' + (arr[k].value) + ' to ' + (arr[k + 2].value - 0.01) + ' Rebate is exactly ' + arr[2 * j - 1].value + ',\n';
            k = k + 2;
        }
        str = str + 'Price >= ' + (arr[threshold * 2 - 2].value) + ' Rebate is exactly ' + (arr[threshold * 2 - 1].value) + '.';
        str = str.replace(/\n+/g, '<br>');
        document.getElementById('finalRules').innerHTML = str;
        document.getElementById('finalRules').style.padding = '10px';
    }
    else {
        var k = 2;
        str = 'Here X: ' + arr[0].value + " & Y: " + arr[1].value + ',\n';
        str = str + 'Price in between 0.01 to ' + (arr[2].value - 0.01) + ' Rebate equal to ' + (arr[1].value) + '%,\n';
        for (var j = 1; j <= (threshold - 2); j++) {
            str = str + 'Price in between ' + (arr[k].value) + ' to ' + (arr[k + 2].value - 0.01) + ' Rebate is ' + arr[2 * j + 1].value + '%,\n';
            k = k + 2;
        }
        str = str + 'Price >= ' + (arr[threshold * 2 - 2].value) + ' Rebate is ' + (arr[threshold * 2 - 1].value) + '%.';
        str = str.replace(/\n+/g, '<br>');
        document.getElementById('finalRules').innerHTML = str;
        document.getElementById('finalRules').style.padding = '10px';
    }
}

function var_J(rebateType) {
    var symbolToAdd = rebateType == 'bx$gy$' ? '$' : '%';
    var message = document.createElement("p");
    var span = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    var inputField = document.createElement("input");
    var inputField2 = document.createElement("input");
    span.appendChild(document.createTextNode('Buy '));
    message.appendChild(span);
    inputField.setAttribute('type', 'number');
    inputField.setAttribute('min', '0.1');
    inputField.setAttribute('id', 'inputValues');
    message.appendChild(inputField);
    span3.appendChild(document.createTextNode('$'));
    message.appendChild(span3);
    span2.appendChild(document.createTextNode(' Get '));
    message.appendChild(span2);
    inputField2.setAttribute('type', 'number');
    inputField2.setAttribute('min', '0.1');
    inputField2.setAttribute('id', 'inputValues');
    message.appendChild(inputField2);
    span4.appendChild(document.createTextNode(symbolToAdd));
    message.appendChild(span4);
    document.getElementById("mainOutput").append(message);
}

function getValues() {
    var rebateType = document.getElementById('enteredRebateType').value;
    var threshold = document.getElementById('enteredThreshold').value;
    return [rebateType, threshold];
}





