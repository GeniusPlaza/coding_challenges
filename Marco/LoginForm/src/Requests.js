import base64 from 'react-native-base64';

const clientSecret = "VRl28brGSpiV22gD3u9PyM0pK4H7eELhTgwHo6IQDkzzMUzZbtSwtey9vKFOOnrRUrzmn5MzeEuDieRFLS9lwcZYV3zkRCuua4DJkGFtJCPZJyCtPFzsbXl72fexNvWs";
const clientID = "ZJdSomM67PUK5POlleieKnuCDRIk8SntBu2ehbgx";
        
var _clientSecretID = "";

const getClientSecretID = ()=> {
    _clientSecretID = base64.encode(clientID + ":" + clientSecret);
    return _clientSecretID;
}

export const checkIsValidResponse = (response) =>{    
    return (response['refresh_token'] != undefined)
}

export const loginRequest = (username, password, onSuccess, onFail) => {
    var request = new XMLHttpRequest()
    
    request.open('POST', 'https://www.geniusplaza.com/o/token/', true);

    request.setRequestHeader("Authorization", "Basic " + getClientSecretID());

    request.onload = function() {
        var response = request.response;
        
        console.log(response);

        var jsonObject = JSON.parse(response);
        if (checkIsValidResponse(jsonObject) && onSuccess)
            onSuccess();
        else if (onFail)
            onFail("Could not login");
    }

    request.onerror = (e)=>{
        if (onFail)
            onFail("Could not login");
    }

    var formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("username", username);
    formData.append("password", password);
    request.send(formData);
};