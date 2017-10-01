exports.mySqlDateNow = function() {
        return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

exports.randomString = function(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
}