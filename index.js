$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var envelope_states = ['state-0', 'state-1', 'state-2'];
    var envelope_state = 0
    envelope.click(function() {
        next_state();
    });
    btn_open.click(function() {
        next_state();
    });
    btn_reset.click(function() {
        close();
    });
    function next_state() {
        envelope.removeClass(envelope_states[envelope_state]);
        envelope_state = (envelope_state + 1 ) % envelope_states.length;
        envelope.addClass(envelope_states[envelope_state]);
    }
    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})