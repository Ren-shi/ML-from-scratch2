const featurefunctions={};

featurefunctions.getPathCount=(paths)=>{
    return paths.length;
}

featurefunctions.getPointCount=(paths)=>{
    const points=paths.flat();
    return points.length;
}

featurefunctions.getWidth=(paths)=>{
    const points=paths.flat();
    const x=points.map(p=>p[0]);
    const min=Math.min(...x);
    const max=Math.max(...x);
    return max-min;
}

featurefunctions.getHeight=(paths)=>{
    const points=paths.flat();
    const y=points.map(p=>p[1]);
    const min=Math.min(...y);
    const max=Math.max(...y);
    return max-min;
}

featurefunctions.inUse=[
    //{name:"Path Count",function:featurefunctions.getPathCount},
    //{name:"Point Count",function:featurefunctions.getPointCount},
    {name:"Width",function:featurefunctions.getWidth},
    {name:"Height",function:featurefunctions.getHeight}
];

if(typeof module!=='undefined'){
    module.exports=featurefunctions;
}