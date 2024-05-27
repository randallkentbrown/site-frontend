import React from 'react';
import './Waterfall.css';
import Fallblock from '../fallblock/Fallblock';

class Waterfall extends React.Component {

    // Constructor!
    constructor(props) {

        super();

        const pages = props.pages;
        const texts = props.texts;
        //const archives = props.archives; TODO: figure out what archives is

        // create blocks
        const blocks = this.merge(pages, texts);

        this.state = {
            pages: pages,
            texts: texts,
            blocks: blocks
        }

    };

    // Generate pairs of texts and pages
    merge(pages,texts) {

        // testing function
        const returnMatchingText = (page) => {
            
            const foundText = texts.find(a => a.id === page.id);
            
            return foundText;

        };

        // return a list of POJOs with properties matching texts and pages together
        return pages.map((eachPage) => {
            return {
                page: eachPage,
                text: returnMatchingText(eachPage).text.text
            };
        });
    }

    // Actual waterfall!
    waterfall(content) {

        // Create a list of one block per block data provided in content
        const renderBlocks = content.map(block => <Fallblock page={block.page} text={block.text}/>);

        // return the blocks wrapped in a waterfall tag
        return (<div className="waterfall">{renderBlocks}</div>);
    }

    // default content for the waterfall. - TODO: where should this live?
    defaultBlocks() {

        // Define default block data; one page and one text
        const errorId = "This ID is actually an error code! 6103";
        const defaultPage = {
            id: errorId,
            title: "Default Error Block",
            shortTitle: "Default"
        }
        const defaultText = {
            id: errorId,
            text: "For some reason, you didn't get the right pages. So all I can show you is this default one. Sorry! I'll add a cat soon."
        }

        // Define associated pages and text
        const defaultBlocks = [
            { page: defaultPage, text: defaultText }
        ];

        return defaultBlocks;
    }

    // Render!
    render() {

        // Grab pages and
        let defaultPages = false;
        const pages = this.state.pages;
        const blocks = this.state.blocks;
        
        // Use default pages if none are received properly
        defaultPages = (pages == null || pages.length <= 1);

        // set content of waterfall to default pages if no pages were received
        const content = defaultPages ? this.defaultBlocks() : blocks;

        // render the waterfall with our content
        return (
            this.waterfall(content)
        );
    }

}

export default Waterfall;