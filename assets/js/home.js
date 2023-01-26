{
    let id = $('#item2');
    console.log(id);

    // jquery code to delete list which is checked
    $("#del").on("click", function () {
        $("input:checkbox").each(function () {
            if ($(this).is(":checked")) {
                $(this).parent().remove();
                let id = ($(this).val());
                $.ajax(
                    {
                        method: 'get',
                        url: `/delete-task/?id=${id}`,
                        success: function (data) {
                            console.log(data);
                        },
                         error: function (err) {
                            console.log(err);
                        }
                    }
                );
            }
        });
    });
}