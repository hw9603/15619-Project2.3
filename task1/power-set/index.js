/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.powersets = function powersets (req, res) {
    if (req.body.set === undefined) {
        res.status(400)
           .json({error :'No set defined!'});
    } else {
        // Everything is ok
        console.log(req.body.set);

        var ps = computePowerset(req.body.set);

        res.status(200)
           .json({set: req.body.set, powerSet: ps})
           .end();
    }
};

function computePowerset(set) {
    var ps = [];
    ps.push([]);
    for (var i = 0; i < set.length; i++) {
        var curr_len = ps.length;
        for (var j = 0; j < curr_len; j++) {
            var new_item = ps[j].concat(set[i]);
            ps.push(new_item);
        }
    }
    return ps;
}
