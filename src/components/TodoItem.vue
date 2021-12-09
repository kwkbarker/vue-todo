<template>
<div class="task">TaskItem</div>
    <!-- <div class='card'>
        <div class="card-header bg-{{ task.importance }}" 
            role='tab' id="heading{{ task.id }}">
            <div class="row row-content align-items-center">
                
                <div class='col-8 text-left'>
                    <h4 class='mb-0 text-white'>
                        <a class='btn btn-outline-dark btn-lg collapsed'
                             data-toggle='collapse' data-target='#panel{{ task.id }}'
                            aria-expanded="false" aria-controls="{{ task.id }}" 
                            id="title{{ task.id }}">{{ task.title }}</a>
                    </h4>
                </div>
                <div class='col-4 text-right right-buttons'>
                    <button type="button" class='btn btn-sm btn-outline-info' name="edit" id="edit{{ task.id }}" 
                        data-toggle="modal" data-target="#editWindow{{ task.id }}" 
                        onclick='fillFields(`{{ task.id }}`)'>Edit</button>
                    <form method='POST'>
                        <input type="hidden" name="protocol" value="delete">
                        <button class='btn btn-sm btn-outline-dark' name="delete" 
                            value='{{ task.id }}'>Done!</button>
                    </form>
                </div> -->
                <!-- edit window modal triggered by edit button -->
                <!-- <div id="editWindow{{ task.id }}" class="modal fade">
                    <div class='modal-dialog modal-lg'>
                        <div class="modal-content">
                            <div class='modal-header'>
                                <h4 style="color: black;">Edit Task</h4>
                                <button type="button" class="close" data-dismiss='modal'>
                                    &times;
                                </button>
                            </div>

                            <div class='modal-body'>
                                <form method="POST" name='put'>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Title</span>
                                        </div>
                                            <input type="text" class="form-control" aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"  
                                                id="edittitle{{ task.id }}" name="puttitle">
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Description</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"  
                                            id="editdescription{{ task.id }}" name="putdescription">
                                        <input type="hidden" name="id" value="{{ task.id }}">
                                        <input type="hidden" name="protocol" value="put">
                                    </div>
                                    <div class='input-group mb-3'>
                                        <button type="button" class="btn btn-secondary btn-sm ml-auto" 
                                            data-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-primary btn-sm ml-1">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

        <div role='tabpanel' class='collapse text-black-50' 
            aria-labelledby='heading{{ task.id }}' 
            id='panel{{ task.id }}' data-parent='#accordion-tasks'>
            <div class='card-body' id="description{{ task.id }}">{{ task.description }}</div>
        </div>
    </div> -->
    
</template>

<script>
export default {
    props: {
        task: {
            type: Object
        }
    }
    
}
</script>