/**
 * Created by ***.
 */



;+function(){
    var SCRM_JS_VERSION = '?v1.0.0'

    // 依赖包脚本
    var vendorScript = document.createElement('script');
    // 入口脚本
    var landingScript = document.createElement('script');
    var landingLink = document.createElement('link');
    var mainLink = document.createElement('link');
    
    landingLink.setAttribute('rel', "stylesheet")
    landingLink.setAttribute('type', "text/css")

    mainLink.setAttribute('rel', "stylesheet")
    mainLink.setAttribute('type', "text/css")
    
    // 默认设置为正式环境
    var fileAddress = '//172.20.18.154/lib/'
    
    // 测试环境
    if(/(172.20.18.154)/.test(window.location)) {
        fileAddress = '//172.20.18.154/lib/'
    }
    
    // 本地开发环境
    if(/test.crmweb.com/.test(window.location)) {
        fileAddress = '//localhost:3000/lib/'
    }
    
    //如果不是本地环境加载打包后的css
    if(!/test.crmweb.com/.test(window.location)) {
        mainLink.href = fileAddress + 'main.min.css' + SCRM_JS_VERSION;
    }

    vendorScript.src = fileAddress + 'vendor.bundle.js' + SCRM_JS_VERSION;
    landingScript.src = fileAddress + 'main.min.js' + SCRM_JS_VERSION;
    
    document.body.appendChild(landingLink);
    document.body.appendChild(mainLink);

    //vendor加载后再加载main
    vendorScript.onload = function() {
        console.log("script loaded");
        appendLandingScript();
    };

    document.body.appendChild(vendorScript);

    function appendLandingScript(){
        document.body.appendChild(landingScript);
    }

}()
