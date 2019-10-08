function submit() {
    var _name = $('input[name=name]');
    var _score = $('input[name=score]');
    var _trial = $('input[name=trial]');
    if(_name.val()!=''&&_score.val()!=''&&_trial.val()!=''){
        $('table[name=scoreboard]').bootstrapTable('append',
        {
            name:_name.val(),
            score:_score.val(),
            trial:_trial.val()
        });
        _name.val('');
        _score.val('');
        _trial.val('');
    }
    else
        alert("You have leaved something blank !!");
}
