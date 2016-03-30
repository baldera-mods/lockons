module.exports = function Lockons(dispatch) {
  dispatch.hook('cCanLockonTarget', function(event) {
    dispatch.toClient('sCanLockonTarget', Object.assign({ ok: true }, event));
  });
};
