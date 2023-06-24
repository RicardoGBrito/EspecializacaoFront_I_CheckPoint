export type cards=[
    {
        id:Number,
        name:String,
        status:String,
        species:String,
        type:String,
        gender:String,
        origin:{
            name:String,
            url:String,
        },
        location:{
            name:String,
            url:String,
        },
        image:String,
        episode:Array<String>,
        url:String,
        created:String,
        favorite?:boolean
    }
]

type FavoriteAction = {
    type: "FAVORITE",
    payload:{
        cards:cards,
        
    }
}

type CancelFavoriteAction ={
    type: "CANCEL_FAVORITE",
    payload:{
        cards:cards,
        
    }
}

type ClearFavorite ={
    type: "CLEAR_FAVORITE"
}

export type Action = FavoriteAction | CancelFavoriteAction | ClearFavorite