require('dotenv').config()

export const config = {
					dev: {
						username: process.env.POSTGRES_DB_USERNAME,
						password: process.env.POSTGRES_DB_PASS,
						database: process.env.POSTGRES_DB_NAME,
						host: process.env.POSTGRES_DB_HOST,
						dialect: "postgres",
						aws_region: process.env.AWS_REGION,
						aws_profile: process.env.AWS_PROFILE,
						aws_media_bucket: process.env.MEDIA_S3_BUCKET
					},
					prod: {
						username: "",
						password: "",
						database: "udagram_prod",
						host: "",
						dialect: "postgres"
					},
					jwt: {
						secret: process.env.JWT_SECRET
					}
				};
