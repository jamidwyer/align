var rootDiv = "#alignment";
var opts = {
    el: rootDiv,
    importURL: "./data/thc.clustal",
    conserv: {
        maxHeight: 50,
        fillColor: "#153926",
        strokeColor: "#153926",
        rectStyler: function (rect, data) {
            if ( data.height < 50 ) {
                rect.style.fill = "#5cb85c";
            }
        }
    }
};
var m = msa(opts);
m.g.colorscheme.addStaticScheme("own",{A: "#696fbb", C: "#cc6fb4", G: "#afc761", T: "#d0b771"});
m.g.colorscheme.set("scheme", "own");
m.g.colorscheme.set("opacity", "0.9");
m.g.vis.set("conserv", "true");
m.g.vis.set("labelId", "false");
m.g.zoomer.set("labelNameLength", 125);
m.g.zoomer.set("labelFontsize", "14");
m.g.zoomer.set("labelLineHeight", "16px");
m.g.zoomer.set("residueFont", "14");

msa.io.clustal.read("./data/thc.clustal", function(err, seqs){
    m.seqs.reset(seqs);
    m.render();
});
