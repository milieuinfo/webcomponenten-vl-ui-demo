import { VlMapBaseLayer } from "./vl-map-baselayer.js";

/**
 * VlMapBaseLayerGRB
 * @class
 * @classdesc De kaart layer component voor GRB. <a href="../demo/vl-map.html">Demo</a>.
 * 
 * @extends VlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 */
export class VlMapBaseLayerGRB extends VlMapBaseLayer {
    constructor() {
        super();
        this.setAttribute('url', 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts');
        this.setAttribute('layer', 'grb_bsk');
        this.setAttribute('title', 'GRB basis laag');
    }
}
