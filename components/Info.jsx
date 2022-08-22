import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

export const Info = () => {
    return (
        <div className="flex items-center justify-center flex-col mt-[5.5rem]">
            <h1 className="text-5xl rounded text-black font-bold uppercase mb-2">more info</h1>
            <p className='text-center'>Get in touch!</p>
            <div className="py-[150px] text-xl text-center">
                <Card className="w-96">
                    <CardHeader floated={false} className="h-80">
                        <img src="/cat.png" alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Natalie Paisley
                        </Typography>
                        <Typography color="blue" className="font-medium" textGradient>
                            CEO / Co-Founder
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <Tooltip content="Like">
                            <Typography
                                as="a"
                                href="#facebook"
                                variant="lead"
                                color="blue"
                                textGradient
                            >
                                <i className="fab fa-facebook" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#twitter"
                                variant="lead"
                                color="light-blue"
                                textGradient
                            >
                                <i className="fab fa-twitter" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#instagram"
                                variant="lead"
                                color="purple"
                                textGradient
                            >
                                <i className="fab fa-instagram" />
                            </Typography>
                        </Tooltip>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}