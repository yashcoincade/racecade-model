const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const car_assets_schema = new Schema({
    type : {
        type : String,
        default : ''
    },
    name : {
        type : String,
        default : ''
    },
    url : {
        type : String,
        default : ''
    },
    price:{
        type: Number,
        default: 0
    },
    display: {
        type: Boolean,
        default:false
    },
    created_in_unity: {
        type: Boolean,
        default: false
    },
    needs_update: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const car_schema = new Schema({
    car_name :{
        type:String,
        required: [true, "Please provide a unique car name"],
        unique:true
    },
    car_class:{
        type:String,
        default:''
    },
    car_url:{
        type:String,
        default:''
    },
    car_type:{
        type:String,
        default:''
    },
    car_level: {
        type: Number,
        default: 0
    },
    car_price : {
        type : Number,
        default : 0
    },
    colors : {
        type: Array,
        default :[
            {
            color_id : 0,
            name: '',
            price : 0,
            unlocked : false
            }
        ]
    },
    car_stats:{
        type:Array,
        default:[{
            car_level : 0,//eg, 1 (max there will be 5 car levels)
            maxHealth :0,
            topSpeed :0,
            accleration:0,
            acclerationTime:0,
            DeacclerationTime:0,
            handling:0,
            nitro:0,
            obstacleDodgeProbability:0,
            powerUseProbability:0,
            priceToUpgrade:0
        }]
    },
    car_assets : {
        type : Object,
        default : {
            skins : [{
                id: '',
                name : '',
                url : '',
                active : false
            }],
            wheels : [{
                id: '',
                name : '',
                url : '',
                active : false
            }],
        }
    },
    initial_car:{
        type:Boolean,
        default:false
    },
    display: {
        type: Boolean,
        default:false
    },
    created_in_unity: {
        type: Boolean,
        default: false
    },
    needs_update: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const chapter_schema = new Schema({
    name : {
        type : String,
        required: [true, 'Provide a name for the chapter']
    },
    unlocked : {
        type : Boolean,
        default : false
    },
    min_stars:{
        type : Number,
        required: [true, 'Provide minimum amount of stars for the chapter']
    },
    total_levels : {
        type : Number,
        required: [true, 'Provide number of total levels for the chapter']
    },
    chapter_number:{
        type: Number,
        required: [true, 'Provide chapter number']
    },
    created_in_unity: {
        type: Boolean,
        default : false
    },
    needs_update: {
        type: Boolean,
        default : false
    }
}, { versionKey: false });
const currrency_schema = new Schema({
    name : {
        type : String,
        default : '' //eg, gems, coins and matic
    },
    value : {
        type : Number,
        default : 0 //only gems is packed by INR i.e 1
    },
    created_in_unity: {
        type: Boolean,
        default: false
    },
    needs_update: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const gems_schema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide product name"]
    },
    image_url:{
        type: String,
        default: ''
    },
    quantity:{
        type: Number,
        required: [true, "Please provide quantity for the product"]
    },
    game_currency:{
        type: String,
        default: 'gems'
    },
    amount:{
        type: Number,
        required: [true, "Please provide amount for the product"]
    },
    currency:{
        type: String,
        default: "inr",
    },
    start_date: {
        type: Date
    },
    end_date:{
        type: Date
    },
    display:{
        type: Boolean,
        default: false
    },
    created_in_unity: {
        type: Boolean,
        default: false
    },
    needs_update: {
        type: Boolean,
        default: false
    }
},{ versionKey: false });
const level_schema = new Schema({
    level_number : {
        type: Number,
        required: [true, 'Please provide level number'],
    },
    chapter_number:{
        type: Number,
        required: [true, 'Please provide a chapter number to which this level belongs to'],
    },
    chapter_name:{
        type: String,
        required: [true, 'Please provide a chapter name to which this level belongs to'],
    },
    unlocked :{
        type:Boolean,
        default:false
    },
    level_rewards : {
        type: Number,
        required: [true, 'Please provide rewards number for XP and coin addition'],
    },
    completed_level :{
        type:Boolean,
        default:false
    },
    total_stars: {
        type: Number,
        default:0
    },
    objectives:{
        type: Array,
        default: [
            {
                task_enum:{
                    type: Object,
                    default:{
                        number: 0,
                        value: ''
                    },
                    required: [true, 'Please provide task_enum number'],
                    // {number: 1, value: "Kill"}
                    
                },
                task_description: {
                    type: String,
                    required: [true, 'Please provide description for the task']
                },
                task_detail_counter:{
                    type: Number,
                    required: [true, 'Please provide task detail counter']
                },
                completed :{
                    type:Boolean,
                    default:false
                },
            }
        ]
    },
    created_in_unity: {
        type: Boolean,
        default: false
    },
    needs_update: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const owned_cars_schema = new Schema({
    owned_by:{
        type:String,
        default:''
    },
    car_uid:{
        type:String,
        default:''
    },
    car_name :{
        type:String,
        default:''
    },
    car_class:{
        type:String,
        default:''
    },
    car_url:{
        type:String,
        default:''
    },
    car_type:{
        type:String,
        default:''
    },
    car_level: {
        type: Number,
        default: 0
    },
    car_price : {
        type : Number,
        default : 0
    },
    colors : {
        type: Array,
        default :[
            {
            color_id : 0,
            name: '',
            price : 0,
            unlocked : false
            }
        ]
    },
    car_stats:{
        type:Array,
        default:[{
            car_level : 0,//eg, 1 (max there will be 5 car levels)
            maxHealth :0,
            topSpeed :0,
            accleration:0,
            acclerationTime:0,
            DeacclerationTime:0,
            handling:0, 
            nitro:0,
            obstacleDodgeProbability:0,
            powerUseProbability:0,
            priceToUpgrade:0
        }]
    },
    car_assets : {
        type : Object,
        default : {
            skins : [{
                id: '',
                name : '',
                url : '',
                active : false
            }],
            wheels : [{
                id: '',
                name : '',
                url : '',
                active : false
            }],
        }
    },
}, { versionKey: false });
const rank_schema = new Schema({
    name : {
        type : String
    },
    XP : {
        type : Object,
        default: {}
    },
    created_in_unity: {
        type: Boolean,
        default: false
    },
    needs_update: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const user_progress_schema = new Schema({
    owned_by:{
        type:String,
        required: [true, 'user id is required'],
        default : ''
    },
    unlocked_chapters:
        {    
            type: Array,
            default: []
        },
    unlocked_levels:{
        type : Array,
        default : [
            {
                level_number : {
                    type: Number,
                    required: [true, 'Please provide level number'],
                },
                chapter_number:{
                    type: Number,
                    required: [true, 'Please provide a chapter number to which this level belongs to'],
                },
                chapter_name:{
                    type: String,
                    required: [true, 'Please provide a chapter name to which this level belongs to'],
                },
                unlocked :{
                    type:Boolean,
                    default:false
                },
                completed :{
                    type:Boolean,
                    default:false
                },
                total_stars: {
                    type: Number,
                    default:0
                },
                objectives:{
                    type: Array,
                    default : []
                    // [
                    //     {
                    //         task_description: {
                    //             type: String,
                    //             required: [true, 'Please provied description for the task']
                    //         },
                    //         completed:{
                    //             type: Boolean,
                    //             default: false
                    //         }
                    //     }
                    // ]
                }
            }
        ]
    }
},{ versionKey: false });
const user_schema = new Schema({
    email : {
        type : String,
        required : [true, 'Is Required']
    },
    password : {
        type : String,
        default : ''
    },
    user_id : {
        type : String, //5-6 character long alphanumeric and unique
        default : ''
    },
    username : {
        type: String,
        default: '',
        unique: [true, "Username already in use. Pick a different username"]
    },
    otp : {
        type: String
    },
    secret : {
        type : String,
        default : ''
    },
    role : {
        type : String,
        default : 'Player'
    },
    cars : {
        type: Array,
        default: []
    },
    weapons : {
        type: Object,
        default : []
    },
    friends : {
        type : Array,
        default : []
        [{
            user_id : '', //5-6 character long alphanumeric 
            username: ''
        }]
    },
    player_profile : {
        type : Object,
        default : {
            xp: 0,
            trophies : 0,
            player_level : 0,
            player_tier : '',
            games_played : 0,
            games_won : 0,
            win_ratio : 0
        }
    },
    user_progress_id : {
        type: String,
        default : '',
    },
    currency : {
        type : Object,
        default : {
            gems : 0,
            coins : 0,
            matic : 0
        }
    },
    registerWith : {
        type :  Number
    },
    verified: {
        type: Boolean,
        default: false
    },
    img_url: {
        type : String,
        default : ''
    },
    reset_password_bool : {
        type : Boolean,
        default :false
    }
}, { versionKey: false });
const weapons_schema = new Schema({
    name : {
        type : String,
        default : '' //eg, gems, coins and matic
    },
    value : {
        type : Number,
        default : 0 //only gems is packed by INR i.e 1
    },
    created_in_unity: {
        type: Boolean,
        default: false
    },
    needs_update: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });


module.exports = {
    car_assets_schema,
    car_schema,
    chapter_schema,
    currrency_schema,
    gems_schema,
    level_schema,
    owned_cars_schema,
    rank_schema,
    user_progress_schema,
    user_schema,
    weapons_schema
};