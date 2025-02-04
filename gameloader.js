function loadResources(sprites)
{
    // PixiJS exposes a premade instance for you to use.
    // or
    //const loader = new PIXI.Loader(); // You can also create your own if you want
    let loader = PIXI.Loader.shared;
    

    // Chainable `add` to enqueue a resource
    loader.add('tile0', 'tilefloor.png');

    loader.add('convST', 'conveyorstraight.png');
    loader.add('convUK', 'conveyorunknown.png');
    loader.add('convTR', 'conveyorturn.png');
    loader.add('convTRF', 'conveyorturnf.png');
    loader.add('convMR', 'conveyormerge.png');
    loader.add('convMRF', 'conveyormergef.png');
    loader.add('convMRT', 'conveyormerget.png');
    loader.add('convS', 'conveyorstart.png');
    loader.add('convE', 'conveyorend.png');
    loader.add('convCR', 'conveyorcross.png');
    loader.add('convSP', 'conveyorsplit.png');
    loader.add('convSPF', 'conveyorsplitf.png');
    loader.add('convSPT', 'conveyorsplitt.png');
    // Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
    // This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
   
   // loader.pre(cachingMiddleware);

    // Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
    // This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
//    loader.use(parsingMiddleware);

    // The `load` method loads the queue of resources, and calls the passed in callback called once all
    // resources have loaded.
    loader.load((loader, resources) => {
        
        // resources is an object where the key is the name of the resource loaded and the value is the resource object.
        // They have a couple default properties:
        // - `url`: The URL that the resource was loaded from
        // - `error`: The error that happened when trying to load (if any)
        // - `data`: The raw data that was loaded
        // also may contain other properties based on the middleware that runs.
        sprites.tile0 = resources.tile0.texture;
        sprites.convUK = resources.convUK.texture;
        sprites.convST = resources.convST.texture;
        sprites.convTR = resources.convTR.texture;
        sprites.convTRF = resources.convTRF.texture;
        sprites.convMR = resources.convMR.texture;
        sprites.convMRF = resources.convMRF.texture;
        sprites.convMRT = resources.convMRT.texture;
        sprites.convE = resources.convE.texture;
        sprites.convS = resources.convS.texture;
        sprites.convCR = resources.convCR.texture;
        sprites.convSP = resources.convSP.texture;
        sprites.convSPF = resources.convSPF.texture;
        sprites.convSPT = resources.convSPT.texture;
    
       // sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
       // sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
        console.log('done loading');
    });

    /*
    // throughout the process multiple signals can be dispatched.
    loader.onProgress.add(() => {}); // called once per loaded/errored file
    loader.onError.add(() => {}); // called once per errored file
    loader.onLoad.add(() => {}); // called once per loaded file
    loader.onComplete.add(() => {}); // called once when the queued resources all load.*/
    return true;
}