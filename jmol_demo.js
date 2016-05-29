// jQuery-UI tabs for commands
$(function() {
    $("#commands").tabs(); // creates the tabs
    $("#commands ul").addClass("nobullet"); // remove bullets from unordered lists
    $("#commands li").addClass("nobullet"); // remove bullets from list-items
});

// Jmol readyFunction 
// is called when Jmol is ready
jmol_isReady = function(applet) {
    document.title = (applet._id + " - Jmol " + Jmol.___JmolVersion)
    Jmol._getElement(applet, "appletdiv").style.border="1px solid grey"
    Jmol.script(myJmol, 'set echo top center; echo "Jmol is ready!";' );
}

// initialize Jmol Applet
var myJmol = "myJmol";
var Info = {
    width:   "100%",
    height:  "100%",
    color:   "#000000", //black
    use:     "HTML5",
    j2sPath: "jsmol/j2s", // this needs to point to where the j2s directory is.
    // jarPath: "jsmol/java",// this needs to point to where the java directory is.
    // jarFile: "JmolAppletSigned.jar",
    
    debug:   false,
    readyFunction: jmol_isReady,
    script:  null,
    allowJavaScript: false,
    disableJ2SLoadMonitor: true,

    src:          null,
    isSigned:     false,
    defaultModel: "",
    console:      "infodiv",
    memoryLimit:  512,
    // serverURL:    "http://chemapps.stolaf.edu/jmol/jmolcd.php",
    addSelectionOptions: false,
}

// jQuery ready functions
// is called when page has been completely loaded
$(document).ready(function() {
    $("#jmol_div").html(Jmol.getAppletHtml(myJmol, Info))

    // append command box to <div id="jmol_div">
    $("#jmol_div").append(Jmol.jmolCommandInput(myJmol, "command", "100%")); 

    // make Jmol script commmands clickable (and execute the content of the <div>)
    $(".jmolscript").click(function(){
        Jmol.script(myJmol, this.innerHTML);
    });
})
// var lastPrompt=0;
