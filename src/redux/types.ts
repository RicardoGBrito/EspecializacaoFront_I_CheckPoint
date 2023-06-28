


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

export type locationCard={
    id: Number,
    name: String,
    type: String,
    dimension: String,
    residents:Array<String>
    url: String,
    created: String
}

export type episodeCard={
    id: Number,
    name: String,
    air_date: String,
    episode: String,
    characters:Array<String>
    url: String,
    created: String
}



type FavoriteAction = {
    type: "FAVORITE",
    payload:{
        cards:cards
        
    }
}

type CancelFavoriteAction ={
    type: "CANCEL_FAVORITE",
    payload:{
        cards:cards
        
    }
}

type ClearFavorite ={
    type: "CLEAR_FAVORITE"
}

type GetAllCards ={
    type: "GET_ALL_CARDS"
}

type GetCards ={
    type: "GET_CARDS",
    payload: {
        cards:cards
    }
}

type UpdateCards ={
    type: "UPDATE_CARDS",
    payload: {
        cards:cards,
        page:number
    }
}

type ClearFilter={
    type: "CLEAR_FILTER"
}

type GetLocation = {
    type: "GET_LOCATION",
    payload:{
        cards:cards
    }
}

type GetEpisodes = {
    type: "GET_EPISODES",
    payload:{
        cards:cards
    }
}

type PageIncrement ={
    type: "PAGE_INCREMENT"
}

type PageDecrement ={
    type: "PAGE_DECREMENT"
}

type FilterName ={
    type: "FILTER_NAME"
    payload: String
}

type ClearFilterName ={
    type: "CLEAR_FILTER_NAME"
    
}


export type Action = FavoriteAction | CancelFavoriteAction | ClearFavorite
export type Action2 = GetLocation | GetEpisodes | GetAllCards | GetCards | UpdateCards | ClearFilter
export type Action3 = PageIncrement | PageDecrement
export type Action4 = FilterName | ClearFilterName