"use client";

import { useReducer } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import LoginDrawer from "./login-drawer";
import Link from "next/link";

type State = {
  unlimitedRecipes: boolean; // $5
  priceTracker: boolean; // $5
  aiAssisant: boolean; // $10
  shoppingList: boolean; // $15
  finalPrice: number;
};

type Action =
  | { type: "UNLIMITED_RECIPES"; value: boolean }
  | { type: "AI_ASSISTANT"; value: boolean }
  | { type: "SHOPPING_LIST"; value: boolean }
  | { type: "PRICE_TRACKER"; value: boolean };

const reducer = (state: State, action: Action) => {
  const newState: State = { ...state };

  switch (action.type) {
    case "UNLIMITED_RECIPES":
      newState.unlimitedRecipes = action.value;
      break;
    case "AI_ASSISTANT":
      newState.aiAssisant = action.value;
      break;
    case "SHOPPING_LIST":
      newState.shoppingList = action.value;
      break;
    case "PRICE_TRACKER":
      newState.priceTracker = action.value;
      break;
    default:
      break;
  }

  let finalPrice = 0;
  for (const [key, value] of Object.entries(newState)) {
    if (value) {
      switch (key) {
        case "unlimitedRecipes":
          finalPrice += 5;
          break;
        case "priceTracker":
          finalPrice += 5;
          break;
        case "aiAssisant":
          finalPrice += 10;
          break;
        case "shoppingList":
          finalPrice += 15;
          break;
        default:
          break;
      }
    }
  }

  return { ...newState, finalPrice };
};

const initialState: State = {
  aiAssisant: false,
  priceTracker: false,
  shoppingList: false,
  unlimitedRecipes: false,
  finalPrice: 0,
};

const LandingPagePriceCalculator = ({ session }: { session: boolean }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Card className="text-left">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Your Price:{" "}
          <p>
            <span className="text-3xl text-primary">
              {state.finalPrice === 0 ? "FREE" : `$${state.finalPrice}`}
            </span>
            {state.finalPrice > 0 && (
              <span className="text-base font-normal text-muted-foreground">
                /month
              </span>
            )}
          </p>
        </CardTitle>
        <CardDescription>
          Price is calculated based on selected features
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-start gap-1.5">
          <Switch checked disabled />
          <p>
            All base <span className="font-logo">Recipify</span> features
          </p>
        </div>
        <div className="flex items-center justify-start gap-1.5">
          <Switch
            checked={state.unlimitedRecipes}
            onCheckedChange={(value) =>
              dispatch({ type: "UNLIMITED_RECIPES", value })
            }
          />
          <p>Unlimited recipes</p>
        </div>
        <div className="flex items-center justify-start gap-1.5">
          <Switch
            checked={state.priceTracker}
            onCheckedChange={(value) =>
              dispatch({ type: "PRICE_TRACKER", value })
            }
          />
          <p>Price tracker</p>
        </div>
        <div className="flex items-center justify-start gap-1.5">
          <Switch
            checked={state.aiAssisant}
            onCheckedChange={(value) =>
              dispatch({ type: "AI_ASSISTANT", value })
            }
          />
          <p>GPT-powered AI assistant</p>
        </div>
        <div className="flex items-center justify-start gap-1.5">
          <Switch
            checked={state.shoppingList}
            onCheckedChange={(value) =>
              dispatch({ type: "SHOPPING_LIST", value })
            }
          />
          <p>Shopping list creator</p>
        </div>
      </CardContent>
      <CardFooter>
        {session ? (
          <>
            <Link href="/dashboard">
              <Button>Start now!</Button>
            </Link>
          </>
        ) : (
          <LoginDrawer>
            <Button className="w-full" size="lg">
              Start now!
            </Button>
          </LoginDrawer>
        )}
      </CardFooter>
    </Card>
  );
};

export default LandingPagePriceCalculator;
