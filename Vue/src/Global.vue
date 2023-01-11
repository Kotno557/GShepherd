<script>
const backend = "http://139.162.39.223/api";
const typeObject = {
    1: {
        "options": [],
        "roomId": "",
        "name": "",
        "active": true,
        "category": 1,
    },
    2: {
        "roomId": "",
        "name": "",
        "active": true,
        "category": 2,
        "limits": ""
    },
    3: {
        "phone": false,
        "party_name": false,
        "address": false,
        "roomId": "",
        "name": "",
        "active": true,
        "category": 3,
    }
};
function array_delete(a,index){
    let b=[];
    for(let i =0;i<a.length;i++){
        if(i!==index){
            b.push(a[i]);
        }
    }
    return b;
}
export default
    {
        backend,
        typeObject,
        array_delete
    }
</script>