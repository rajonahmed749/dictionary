import React from 'react';
import "./Definitions.css"
const Definitions = ({ category, meanings, word, LightMode }) => {
    return (
        <div className="meanings">
            {/* audio */}
            {
                meanings[0] && word && category === 'en' && (
                    <audio
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{ backgroundColor: "#fff", borderRadius: 10 }}
                        controls
                    >
                        your browser doesn't support audio element
                    </audio>
                )
            }
            {
                word === "" ? (<span className="subTitle">Search something new!</span>) : (
                    meanings.map((mean) => mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div className="singleMean" style={{ backgroundColor: LightMode ? "#3b5360" : "white", color: LightMode ? "white" : "black" }}>
                                <b style={{ textAlign: "center" }}>{def.definition}</b>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                {
                                    def.example && (
                                        <span>
                                            <b> Example: </b>
                                            {def.example}
                                        </span>
                                    )
                                }
                                {
                                    def.synonyms && (
                                        <span>
                                            <b> Synonyms: </b>
                                            {def.synonyms.map((s) => ` ${s}, `)}
                                        </span>
                                    )
                                }
                            </div>
                        ))
                    )))
                )
            }
        </div>
    );
};

export default Definitions;