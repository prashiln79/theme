import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ChatService } from "./chat.service";
import { Chat, Contact, Profile } from "./chat.types";

@Injectable()
export class ChatChatsResolver implements Resolve<any> {
	/**
	 * Constructor
	 */
	constructor(private _chatService: ChatService, private _router: Router) {}

	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------

	/**
	 * Resolver
	 *
	 * @param route
	 * @param state
	 */
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chat[]> | any {
		return this._chatService.getChats();
	}
}

@Injectable()
// export class ChatChatResolver implements Resolve<any> {
// 	/**
// 	 * Constructor
// 	 */
// 	constructor(private _chatService: ChatService, private _router: Router) {}

// 	// -----------------------------------------------------------------------------------------------------
// 	// @ Public methods
// 	// -----------------------------------------------------------------------------------------------------

// 	/**
// 	 * Resolver
// 	 *
// 	 * @param route
// 	 * @param state
// 	 */
// 	// resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chat> {
// 	// 	return this._chatService.getChatById(route.paramMap.get("id")).pipe(
// 	// 		// Error here means the requested chat is not available
// 	// 		catchError((error) => {
// 	// 			// Log the error
// 	// 			console.error(error);

// 	// 			// Get the parent url
// 	// 			const parentUrl = state.url.split("/").slice(0, -1).join("/");

// 	// 			// Navigate to there
// 	// 			this._router.navigateByUrl(parentUrl);

// 	// 			// Throw an error
// 	// 			return throwError(error);
// 	// 		})
// 	// 	);
// 	// }
// }

@Injectable()
export class ChatContactsResolver implements Resolve<any> {
	/**
	 * Constructor
	 */
	constructor(private _chatService: ChatService, private _router: Router) {}

	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------

	/**
	 * Resolver
	 *
	 * @param route
	 * @param state
	 */
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[]> | any {
		return this._chatService.getContacts();
	}
}

@Injectable()
export class ChatProfileResolver implements Resolve<any> {
	/**
	 * Constructor
	 */
	constructor(private _chatService: ChatService, private _router: Router) {}

	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------

	/**
	 * Resolver
	 *
	 * @param route
	 * @param state
	 */
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> | any {
		return this._chatService.getProfile();
	}
}
