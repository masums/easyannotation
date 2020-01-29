
import {AbstractToolbarItem} from "./AbstractToolbarItem"
import InternalConfig from "../utils/InternalConfig"
import {BaseAnnotator} from "../annotators/BaseAnnotator"
import {TextAnnotator} from "../annotators/TextAnnotator"
import {AnnotatorContainer} from "../AnnotatorContainer"

import TIcon from "../icons/letter-t.svg"

export class TextToolbarItem extends AbstractToolbarItem {
    
    constructor() {
        super();
        this.iconSVG = TIcon;
    }
    
    public createAnnotator(config: InternalConfig, parent: AnnotatorContainer) : BaseAnnotator {
        var textAnnotator = new TextAnnotator(config, parent);
        
        return textAnnotator;
    }
    
}
