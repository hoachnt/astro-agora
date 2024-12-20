import AgoraToken from "agora-token";
import type { AstroGlobal } from "astro";

const { RtcRole, RtcTokenBuilder } = AgoraToken;

const PUBLIC_APP_ID = import.meta.env.PUBLIC_APP_ID;
const APP_CERTIFICATE = import.meta.env.APP_CERTIFICATE;

// Отключаем prerendering для этого маршрута
export const prerender = false;

export async function GET({ params, url }: AstroGlobal) {
	try {
		// Проверяем наличие channel
		const channel = params.channel;
		if (!channel) {
			return new Response(
				JSON.stringify({ error: "channel is required" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Получаем uid, если его нет — используем "0"
		let uid: number | string = url.searchParams.get("uid") || "0";

		// Приводим uid к числу
		uid = parseInt(uid, 10);
		if (isNaN(uid)) {
			return new Response(
				JSON.stringify({ error: "uid should be a valid number" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Логирование для отладки
		console.log(`Received request for channel: ${channel}, uid: ${uid}`);

		// Генерация токена
		const token = RtcTokenBuilder.buildTokenWithUid(
			PUBLIC_APP_ID,
			APP_CERTIFICATE,
			channel,
			uid,
			RtcRole.PUBLISHER,
			600, // Время жизни токена в секундах
			600
		);

		return new Response(JSON.stringify({ token, uid, channel }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (e: any) {
		// Логирование ошибки для отладки
		console.error("Error generating token:", e);

		return new Response(
			JSON.stringify({
				error: `json expected: ${JSON.stringify(e.message || e)}`,
			}),
			{ status: 400, headers: { "Content-Type": "application/json" } }
		);
	}
}
