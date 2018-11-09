/**
 * @class @name BulkMailCli_commands
 * @type class
 * @description Does different things for different bulkmail commands
 * 
 * Date of creation: Sun, 4th Nov 2018. 10:43:17 IST
 */


import BulkMailCli_minimist from '../minimist.util'
import BulkMailCli_i18n from '../i18n/i18n.util'
import BulkMailCli_booleanCommands from './booleanCommands.class'
import { terminal } from 'terminal-kit'

import help from './tools/help.util'
import selectLang from './tools/selectLang.util'
import changeUsername from './tools/changeUsername.util'
import demo from './tools/demo.util'

var { isHelp, isConfig, isDemo } = BulkMailCli_booleanCommands
var { getText } = BulkMailCli_i18n


class BulkMailCli_commands {

    constructor(){
        if(isHelp()){
            this.help()
        } else if(isConfig()){
            this.config()
        } else if(isDemo()){
            this.demo()
        } else {
            this.wrongCommand()
        }
    }

    
    /**
     * @method @name help (Not @static)
     *
     * @param none
     * @returns void
     * 
     * @description Provides help info when no arguments are provided.
     * 
     * @summary DO NOT CHANGE ANYTHING HERE. Because, it just works.
     */
    help(){
        if(isHelp()){
            help()
        }
    }


    /**
     * @method @name config (Not @static)
     *
     * @param none
     * @returns void
     * 
     * @description Used to change user configs in the CLI.
     */
    config(){
        if(isConfig()){

            if(BulkMailCli_minimist.getArgs()["lang"]){
                selectLang()
            } else if(BulkMailCli_minimist.getArgs()["username"]){
                changeUsername()
            } else {
                terminal.red.bold(`${getText("wrong_bulkmail_config_command")}`) 
            }

        }
    }


    /**
     * @method @name demo (Not @static)
     *
     * @param none
     * @returns void
     * 
     * @description Used to copy demo files to local machine
     */
    demo(){
        if(isDemo()){
            demo()
        }
    }


    /**
     * @method @name wrongCommand (Not @static)
     *
     * @param none
     * @returns void
     * 
     * @description Renders when an unknown argument or command is used.
     */
    wrongCommand(){
        terminal.red.bold(`${getText("wtf_was_that")}`)
    }

}

export default BulkMailCli_commands