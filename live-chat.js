(function(){
    // Your full chat code as a string
    var chatCode = `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/68a7d2f16beb8c1922ef1431/1j46q6ri2';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
        })();
    `;

    // Create container if it doesn't exist
    if(!document.getElementById("live-chat-slot")) {
        var div = document.createElement("div");
        div.id = "live-chat-slot";
        document.body.appendChild(div);
    }

    // Inject the chat code
    var script = document.createElement("script");
    script.innerHTML = chatCode;
    document.getElementById("live-chat-slot").appendChild(script);
})();