const constant={};

constants.DATA_DIR="../data";
constants.RAW_DIR=constants.DATA_DIR+"/raw";
constants.DATASEY_DIR=constants.DATA+"/dataset";
constants.JSON_DIR=constants.DATA_DIR+"/json";
constants.IMG_DIR=constants.DATA_DIR+"/img";
constants.SAMPLES_DIR=constants.DATA_DIR+"/samples.json";
constants.JS_OBJECTS="../common/js_objects";
constants.SAMPLES_JS=constants.JS_OBJECTS+"/samples.js";

if(typeof module!=='undefined'){
	module.exports=constants;
}