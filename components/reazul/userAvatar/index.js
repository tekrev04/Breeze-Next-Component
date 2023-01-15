// Coded By Farabi

function UserAvatarComponent(props){

    const {userName, userimg} = props;
    var matches = userName.match(/\b(\w)/g); 
    var acroname = matches.join('').toUpperCase(); 
    const arr = userName.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
        const user = arr.join(" ");
    return(
        <>
        <hr />
        <footer className="userAvatar">
        {userimg ? <img className="rounded-circle" src={userimg} /> : <div className="userfooter">{acroname}</div>}
            
         {/* <div class="userfooter">{acronym}</div> */}
         <p className="userDetail">{user}</p>
        </footer> 
        </>
    );
}

export default UserAvatarComponent