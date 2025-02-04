function isInBounds(tilemap, x, y)
{
    return x >= 0 && x < tilemap.length && y >= 0 && y < tilemap[0].length;
}

function determineConveyorTex(tilemap, x, y, sprites)
{
    let thisconv = tilemap[x][y].convdata;
    //Trash code incoming
    let incount = 0;
    let outcount = 0;
    let lastin = -1;//0 = up, 1 = right, 2 = down, 3 = left
    let lastout = -1;
    let newtex = sprites.convUK;
    let newrot = 0;
    let flip = false;
    //Input checking
    if(thisconv.up == 1)
    {
        incount++;
        lastin = 0;
    }
    if(thisconv.down == 1)
    {
        incount++;
        lastin = 2;
    }
    if(thisconv.left == 1)
    {
        incount++;
        lastin = 3;
    }
    if(thisconv.right == 1)
    {
        incount++;
        lastin = 1;
    }

    //Output checking
    if(thisconv.up == 2)
    {
        outcount++;
        lastout = 0;
    }
    if(thisconv.down == 2)
    {
        outcount++;
        lastout = 2;
    }
    if(thisconv.left == 2)
    {
        outcount++;
        lastout = 3;
    }
    if(thisconv.right == 2)
    {
        outcount++;
        lastout = 1;
    }
    
    if(incount == 1 && outcount == 0)//End
    {
        newtex = sprites.convE;
        newrot = lastin;    //Sidenote, sprite is flipped compared to all others, just makes it easier for me
    }
    else if(incount == 0 && outcount == 1)//Start
    {
        newtex = sprites.convS;
        newrot = lastout;
    }
    else if(incount == 1 && outcount == 1)//1 to 1
    {
        if(((lastout == 0 || lastin == 0) && (lastin == 2 || lastout == 2))//Straight ahead check
        || ((lastout == 1 || lastin == 1) && (lastin == 3 || lastout == 3)))//Being specific doesnt matter much for this check
        {
            newtex = sprites.convST;
            newrot = lastout;
        }
        else //Must be a turn
        {
            newtex = sprites.convTR;
            newrot = lastout;
            if((lastout < lastin && !(lastin == 3 && lastout == 0)) || (lastin == 0 && lastout == 3))
                newtex = sprites.convTRF;
        }

    }
    else if(incount == 2 && outcount == 1)//Merge
    {
        newtex = sprites.convMR;
        newrot = lastout;
        //poopcode incoming
        if((lastout == 0 && thisconv.right == 1) ||
        (lastout == 1 && thisconv.down == 1) ||
        (lastout == 2 && thisconv.left == 1) ||
        (lastout == 3 && thisconv.up == 1))
            newtex = sprites.convMRF;
        if((lastin == 0 && thisconv.down == 1) ||
        (lastin == 1 && thisconv.left == 1) ||
        (lastin == 2 && thisconv.up == 1) ||
        (lastin == 3 && thisconv.right == 1))
            newtex = sprites.convMRT;
    }
    else if(incount == 2 && outcount == 2)//Crossover
    {
        newtex = sprites.convCR;
        if(lastout == 1 && thisconv.down == 2)
            newrot = 1;
        else if(lastout == 3 && thisconv.down == 2)
            newrot = 2;
        else if(lastout == 3 && thisconv.up == 2)
            newrot = 3;
    }
    else if(incount == 1 && outcount == 2)//Splitter
    {//Im tired so the code for this one is especially bad
        newrot = (lastin + 2) % 4;
        newtex = sprites.convSPT;
        if((lastout == 1 && thisconv.up == 2) ||
        (lastout == 3 && thisconv.down == 2))
        {
            if(lastin == 1 || lastin == 3)
                newtex = sprites.convSP;
            else
                newtex = sprites.convSPF;
        }
        else if((lastout == 1 && thisconv.down == 2) ||
        (lastout == 3 && thisconv.up == 2))
        {
            if(lastin == 1 || lastin == 3)
                newtex = sprites.convSPF;
            else
                newtex = sprites.convSP;
        }
    }

    return {'newtex': newtex, 'newrot': newrot};
}