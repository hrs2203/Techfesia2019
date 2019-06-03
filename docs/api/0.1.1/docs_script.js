const postmanData = {"info":{"_postman_id":"ac4fc371-928e-4bde-8902-789fe51e1eca","name":"Techfesia2019","description":"## This is the collection of APIs for Techfesia2019 of IIIT Sri City","schema":"https://schema.getpostman.com/json/collection/v2.1.0/collection.json"},"item":[{"name":"Authentication","item":[{"name":"User Token Pair Obtain","request":{"auth":{"type":"noauth"},"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"username\":\"{{username}}\",\n\t\"password\":\"{{password}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token",""]}},"response":[{"name":"User Token Pair Obtain","originalRequest":{"method":"POST","header":[{"key":"Accept","value":"application/json","type":"text"},{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"username\":\"{{username}}\",\n\t\"password\":\"{{password}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/obtain/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","obtain",""]}},"status":"OK","code":200,"_postman_previewlanguage":"json","header":[{"key":"Content-Type","value":"application/json","description":"","type":"text"}],"cookie":[],"body":"{\n  \"access\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiY29sZF9zdHVmZiI6IuKYgyIsImV4cCI6MTIzNDU2LCJqdGkiOiJmZDJmOWQ1ZTFhN2M0MmU4OTQ5MzVlMzYyYmNhOGJjYSJ9.NHlztMGER7UADHZJlxNG0WSi22a2KaYSfd1S-AuT7lU\",\n  \"refresh\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImNvbGRfc3R1ZmYiOiLimIMiLCJleHAiOjIzNDU2NywianRpIjoiZGUxMmY0ZTY3MDY4NDI3ODg5ZjE1YWMyNzcwZGEwNTEifQ.aEoAYkSJjoWH1boshQAaTkf8G3yn0kapko6HFRt7Rh4\"\n}"}]},{"name":"User Token Refresh","event":[{"listen":"test","script":{"id":"49d5c21b-8879-4cbf-8299-d84a8d5c7f4e","exec":[""],"type":"text/javascript"}}],"request":{"auth":{"type":"noauth"},"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"refresh\":\"{{refresh_token}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/refresh/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","refresh",""]}},"response":[{"name":"User Token Refresh","originalRequest":{"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"refresh\":\"{{refresh_token}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/refresh/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","refresh",""]}},"status":"OK","code":200,"_postman_previewlanguage":"json","header":[{"key":"Content-Type","value":"application/json","description":"","type":"text"}],"cookie":[],"body":"{\n    \"access\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiY29sZF9zdHVmZiI6IuKYgyIsImV4cCI6MTIzNTY3LCJqdGkiOiJjNzE4ZTVkNjgzZWQ0NTQyYTU0NWJkM2VmMGI0ZGQ0ZSJ9.ekxRxgb9OKmHkfy-zs1Ro_xs1eMLXiR17dIDBVxeT-w\"\n}"}]},{"name":"Staff token pair obtain","request":{"auth":{"type":"noauth"},"method":"POST","header":[{"key":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"username\":\"{{staff_username}}\",\n\t\"password\":\"{{staff_password}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token",""]}},"response":[{"name":"Staff token pair obtain","originalRequest":{"method":"POST","header":[{"key":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"username\":\"{{staff_username}}\",\n\t\"password\":\"{{staff_password}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/obtain/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","obtain",""]}},"status":"OK","code":200,"_postman_previewlanguage":"json","header":[{"key":"Content-Type","value":"application/json","description":"","type":"text"}],"cookie":[],"body":"{\n    \"access\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiY29sZF9zdHVmZiI6IuKYgyIsImV4cCI6MTIzNDU2LCJqdGkiOiJmZDJmOWQ1ZTFhN2M0MmU4OTQ5MzVlMzYyYmNhOGJjYSJ9.NHlztMGER7UADHZJlxNG0WSi22a2KaYSfd1S-AuT7lU\",\n    \"refresh\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImNvbGRfc3R1ZmYiOiLimIMiLCJleHAiOjIzNDU2NywianRpIjoiZGUxMmY0ZTY3MDY4NDI3ODg5ZjE1YWMyNzcwZGEwNTEifQ.aEoAYkSJjoWH1boshQAaTkf8G3yn0kapko6HFRt7Rh4\"\n}"}]},{"name":"Staff Token Refresh","request":{"auth":{"type":"noauth"},"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"refresh\":\"{{staff_refresh_token}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/refresh/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","refresh",""]}},"response":[{"name":"Staff Token Refresh","originalRequest":{"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"refresh\":\"{{staff_refresh_token}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/refresh/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","refresh",""]}},"status":"OK","code":200,"_postman_previewlanguage":"json","header":[{"key":"Content-Type","value":"application/json","description":"","type":"text"}],"cookie":[],"body":"{\n    \"access\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiY29sZF9zdHVmZiI6IuKYgyIsImV4cCI6MTIzNTY3LCJqdGkiOiJjNzE4ZTVkNjgzZWQ0NTQyYTU0NWJkM2VmMGI0ZGQ0ZSJ9.ekxRxgb9OKmHkfy-zs1Ro_xs1eMLXiR17dIDBVxeT-w\"\n}"}]},{"name":"SuperUser Token Pair obtain","request":{"auth":{"type":"noauth"},"method":"POST","header":[{"key":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"username\":\"{{superuser_username}}\",\n\t\"password\":\"{{superuser_password}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token",""]}},"response":[{"name":"SuperUser Token Pair obtain","originalRequest":{"method":"POST","header":[{"key":"Content-Type","value":"application/json","type":"text"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"username\":\"{{superuser_username}}\",\n\t\"password\":\"{{superuser_password}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/obtain/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","obtain",""]}},"status":"OK","code":200,"_postman_previewlanguage":"json","header":[{"key":"Content-Type","value":"application/json","description":"","type":"text"}],"cookie":[],"body":"{\n  \"access\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiY29sZF9zdHVmZiI6IuKYgyIsImV4cCI6MTIzNDU2LCJqdGkiOiJmZDJmOWQ1ZTFhN2M0MmU4OTQ5MzVlMzYyYmNhOGJjYSJ9.NHlztMGER7UADHZJlxNG0WSi22a2KaYSfd1S-AuT7lU\",\n  \"refresh\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImNvbGRfc3R1ZmYiOiLimIMiLCJleHAiOjIzNDU2NywianRpIjoiZGUxMmY0ZTY3MDY4NDI3ODg5ZjE1YWMyNzcwZGEwNTEifQ.aEoAYkSJjoWH1boshQAaTkf8G3yn0kapko6HFRt7Rh4\"\n}"}]},{"name":"SuperUser Token Refresh","request":{"auth":{"type":"noauth"},"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","type":"text","value":"application/json"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"refresh\":\"{{superuser_refresh_token}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/refresh/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","refresh",""]}},"response":[{"name":"SuperUser Token Refresh","originalRequest":{"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","type":"text","value":"application/json"},{"key":"Accept","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"refresh\":\"{{superuser_refresh_token}}\"\n}"},"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/refresh/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token","refresh",""]}},"status":"OK","code":200,"_postman_previewlanguage":"json","header":[{"key":"Content-Type","value":"application/json","description":"","type":"text"}],"cookie":[],"body":"{\n    \"access\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3BrIjoxLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiY29sZF9zdHVmZiI6IuKYgyIsImV4cCI6MTIzNTY3LCJqdGkiOiJjNzE4ZTVkNjgzZWQ0NTQyYTU0NWJkM2VmMGI0ZGQ0ZSJ9.ekxRxgb9OKmHkfy-zs1Ro_xs1eMLXiR17dIDBVxeT-w\"\n}"}]},{"name":"Revoke All Tokens (Sign Out)","request":{"auth":{"type":"noauth"},"method":"DELETE","header":[{"key":"Accept","type":"text","value":"application/json"},{"key":"Authorization","type":"text","value":"Bearer {{access_token}}"},{"key":"Content-Type","name":"Content-Type","type":"text","value":"application/json","disabled":true}],"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token",""]},"description":"Revokes the given refresh tokens signing out the user from perticular device.\n\nIf no token is provided in body, then all tokens related to user are deleted"},"response":[{"name":"Revoke All Tokens (SIgn Out from Everywhere)","originalRequest":{"method":"DELETE","header":[{"key":"Accept","value":"application/json","type":"text"},{"key":"Authorization","value":"Bearer {{access_token}}","type":"text"}],"url":{"raw":"{{protocol}}://{{host_name}}/auth/token/","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["auth","token",""]}},"status":"OK","code":200,"_postman_previewlanguage":"json","header":[{"key":"Content-Type","value":"application/json","description":"","type":"text"}],"cookie":[],"body":"{\n\t\"tokens_deleted\":5\n}"}]}],"auth":{"type":"noauth"},"event":[{"listen":"prerequest","script":{"id":"382510a1-077a-463a-926f-8233fdacdb68","type":"text/javascript","exec":[""]}},{"listen":"test","script":{"id":"a88c4c32-4eee-4756-90d2-422c55b1b410","type":"text/javascript","exec":[""]}}]},{"name":"Users","item":[{"name":"Get Users (Staff only)","request":{"auth":{"type":"noauth"},"method":"GET","header":[{"key":"Accept","value":"application/json","type":"text"},{"key":"Content-Type","value":"application/json","type":"text"},{"warning":"This is a duplicate header and will be overridden by the Authorization header generated by Postman.","key":"Authorization","value":"Bearer {{staff_access_token}}","type":"text"}],"url":{"raw":"{{protocol}}://{{host_name}}/users?limit=10","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["users"],"query":[{"key":"limit","value":"10","description":"limit the number of entries"},{"key":"","value":"","disabled":true}]},"description":"Get details of all the users.\nset limit=x to show only x entries\nset <field>=<value> to filter based on that value ex: username=test"},"response":[]},{"name":"Get user details","request":{"auth":{"type":"noauth"},"method":"GET","header":[{"key":"Accept","type":"text","value":"application/json"},{"key":"Content-Type","value":"application/json","type":"text"},{"key":"Authorization","value":"Bearer {{access_token}}","type":"text"}],"url":{"raw":"{{protocol}}://{{host_name}}/users/{{username}}","protocol":"{{protocol}}","host":["{{host_name}}"],"path":["users","{{username}}"]},"description":"Get details of a perticular user. Only the user herself or the staff/superuser can access this API"},"response":[]}]}],"event":[{"listen":"prerequest","script":{"id":"6c168dbf-d24c-406b-b990-49c2ecd0f228","type":"text/javascript","exec":[""]}},{"listen":"test","script":{"id":"f63fa63e-5c43-4073-b859-ff3e120dc441","type":"text/javascript","exec":[""]}}]}


function lowerAndRemoveReqChars(inpStr){
    const replaceSubs = {
        " ": "-"
    };

    const delSubs = ['(', ')'];

    inpStr = inpStr.toLowerCase();
    for(key in replaceSubs){
        inpStr = inpStr.split(key).join(replaceSubs[key]);
    }
    for(ch of delSubs){
        inpStr = inpStr.split(ch).join('');
    }

    return inpStr;
}


$(document).ready(function () {
    const folders = postmanData.item;
    for (const folder of folders) {
        const folderNameFormatted = lowerAndRemoveReqChars(folder.name);
        console.log(folderNameFormatted);

        const requests = folder.item;
        for (req of requests) {
            if (req.request.description) {
                // console.log(req.name);
                // console.log(req.request.description);

                const reqNameFormatted = lowerAndRemoveReqChars(req.name);
                const reqId = ['request', folderNameFormatted, reqNameFormatted].join('-');
                console.log(reqId);
                const descriptionFormatted = req.request.description.split('\n').join('<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                const descriptionElement = `
                                                <div style="font-style:italic">
                                                    <blockquote>
                                                        ${descriptionFormatted}
                                                    </blockquote>
                                                </div>
                                                `
                const element = document.getElementById(reqId).insertAdjacentHTML("afterend", descriptionElement);
            }
        }
    }
});

$(document).ready(function () {
    allPanes = document.getElementsByClassName("tab-pane")
    for (pane of allPanes) {
        if (pane.id.includes("http")) {
            pane.classList.add("active");
        }
        else if (pane.id.includes("curl")) {
            pane.classList.remove("active");
        }

        allTagPanes = document.getElementsByTagName("li");

        curlTagPanes = [];
        for (l of allTagPanes) {
            if (l.innerText == "Curl") {
                curlTagPanes.push(l);
            }
        }

        httpTagPanes = [];
        for (l of allTagPanes) {
            if (l.innerText == "HTTP") {
                httpTagPanes.push(l);
            }
        }

        for (l of curlTagPanes) {
            l.classList.remove("active");
        }

        for (l of httpTagPanes) {
            l.classList.add("active");
        }
    }

    // curlPane = document.getElementById("request-authentication-superuser-token-refresh-example-curl");

    // curlPane.classList.remove("active");
});
