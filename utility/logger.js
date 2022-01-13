const winston = require("winston");
const moment = require("moment-timezone");

// winston default logging levels { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
const logLevels = {
    levels: {
      error: 0,
      warn: 1,
      info: 2,
      verbose: 3,
      debug: 4,
      silly: 5,
    },
  };


let logger = winston.createLogger({  
    level: logLevels.levels,    
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
    // format: winston.format.combine(        
    //     winston.format.timestamp(),        
    //     winston.format.printf(info => {
    //         return `${info.timestamp} -- ${info.level}: -- ${info.message}`;        
    //     })    
    // ),   
    transports: [
      new winston.transports.Console({
        level: 'debug',
    }),
      new winston.transports.File({
          level: 'error',
          // Create the log directory if it does not exist
          filename: 'logs/error_'+moment().format('DD-MM-YY')+'.log',
      })
  ] 
    //transports: [new winston.transports.Console()]
});

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "green",
});
module.exports = logger;